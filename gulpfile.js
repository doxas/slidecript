// load plugin
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    }),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');

// path string
var paths = {
    'mdDir': 'markdown/*.md',
    'htmlDir': 'html/**',
    'jsDir': 'js/*.js',
    'libDir': 'lib/*.js',
    'cssDir': 'style/*.css',
    'imageDir': 'image/**',
    'destDir': 'build/'
};

// module of me
var app = require('./app/index.js');
var data;
gulp.task('app', function(){
    var fs = require('fs');
    fs.exists('build', function(exists){
        if(!exists){fs.mkdirSync('build', 0777);}
    })
    fs.exists('build/image', function(exists){
        if(!exists){fs.mkdirSync('build/image', 0777);}
    })
    var source = fs.readFileSync('html/header.html', 'utf-8');
    data = app.parse(fs.readFileSync('markdown/document.md', 'utf-8'));
    if(data.title !== ''){
        source = source.replace(/@title@/g, data.title);
        if(data.title2 === ''){
            source = source.replace(/@title2@/, data.title);
        }
    }
    if(data.title2 !== ''){
        source = source.replace(/@title2@/, data.title2);
    }
    if(data.subtitle !== ''){
        source = source.replace(/@subtitle@/, data.subtitle);
    }
    if(data.author !== ''){
        source = source.replace(/@author@/, data.author);
    }
    if(data.list != null && data.list.length > 0){
        source = source.replace(/@list@/, JSON.stringify(data.list));
    }else{
        source = source.replace(/@list@/, '');
    }
    source += data.dest;
    source += fs.readFileSync('html/footer.html', 'utf-8');
    fs.writeFile(paths.destDir + 'index.html', source);
});

// browser sync
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: paths.destDir
        }
    });
});

// js
gulp.task('jslint', function() {
    return gulp.src(paths.jsDir)
        .pipe($.jshint())
        .pipe($.jshint.reporter());
});

gulp.task('buildjs', function() {
    return gulp.src(paths.jsDir)
        .pipe($.uglify())
        .pipe($.concat('script.js'))
        .pipe(gulp.dest(paths.destDir));
});

gulp.task('concatjs', function() {
    return gulp.src(paths.jsDir)
        .pipe($.concat('script.js'))
        .pipe(gulp.dest(paths.destDir));
});

// other task
gulp.task('copy', function() {
    gulp.src(paths.libDir).pipe(gulp.dest(paths.destDir));
    gulp.src(paths.cssDir).pipe(gulp.dest(paths.destDir));
    gulp.src(paths.imageDir).pipe(gulp.dest(paths.destDir + '/image'));
    return browserSync.reload();
});

gulp.task('watch', function() {
    gulp.watch([paths.mdDir], ['app']);
    gulp.watch([paths.cssDir], ['copy']);
    gulp.watch([paths.jsDir]), ['concatjs'];
});

gulp.task('build', function() {
    runSequence('app', 'jslint', 'buildjs', 'watch', 'browserSync');
});

gulp.task('test', function() {
    runSequence('app', 'copy', 'jslint', 'concatjs', 'watch', 'browserSync');
});

gulp.task('default', ['test']);
