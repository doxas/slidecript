# title h1
## title h2
### subtitle h3
##### doxas
^^^

#### image test

paragraparagraparagraparagra*parag*rapppppparagraph

paragraparagraparagraparagra**iparag**rapppppparagraph

![](sample.png)

---

#### paragraph test

paragraph`code`paragraph

paragraph

* list
* list
* list
* list
* list

---

#### codeblock test

```
#version 300 es
layout (location = 0) in vec3 position;

layout (std140) uniform matrix {
    mat4 mvp;
} mat;

uniform float scale;

void main(){
    gl_Position = mat.mvp * vec4(position * scale, 1.0);
}
```

---

#### codeblock test

```
// 頂点シェーダとフラグメントシェーダの生成
var v_shader = create_shader('vs');
var f_shader = create_shader('fs');

// プログラムオブジェクトの生成とリンク
var prg = create_program(v_shader, f_shader);

// attributeLocationの取得
var attLocation = gl.getAttribLocation(prg, 'position');

// attributeの要素数(この場合は xyz の3要素)
var attStride = 3;
```

---

#### blockquote test

paragraph

--blockquote--

---

#### webgl quiz

what is this?

<input type="radio" id="radio01_01" name="radio01"><label for="radio01_01">ans 01</label>
<input type="radio" id="radio01_02" name="radio01"><label for="radio01_02">ans 02</label>
<input type="radio" id="radio01_03" name="radio01"><label for="radio01_03">ans 03</label>
<input type="radio" id="radio01_04" name="radio01"><label for="radio01_04">ans 04</label>

---

#### webgl quiz

what is this?

<input type="radio" id="radio02_01" name="radio02"><label for="radio02_01">ans 01</label>
<input type="radio" id="radio02_02" name="radio02"><label for="radio02_02">ans 02</label>
<input type="radio" id="radio02_03" name="radio02"><label for="radio02_03">ans 03</label>
<input type="radio" id="radio02_04" name="radio02"><label for="radio02_04">ans 04</label>

---

#### webgl quiz

what is this?

<input type="radio" id="radio03_01" name="radio03"><label for="radio03_01">ans 01</label>
<input type="radio" id="radio03_02" name="radio03"><label for="radio03_02">ans 02</label>
<input type="radio" id="radio03_03" name="radio03"><label for="radio03_03">ans 03</label>
<input type="radio" id="radio03_04" name="radio03"><label for="radio03_04">ans 04</label>

---

#### webgl quiz

what is this?

<input type="radio" id="radio04_01" name="radio04"><label for="radio04_01">ans 01</label>
<input type="radio" id="radio04_02" name="radio04"><label for="radio04_02">ans 02</label>
<input type="radio" id="radio04_03" name="radio04"><label for="radio04_03">ans 03</label>
<input type="radio" id="radio04_04" name="radio04"><label for="radio04_04">ans 04</label>

---

#### webgl quiz

what is this?

<input type="radio" id="radio05_01" name="radio05"><label for="radio05_01">ans 01</label>
<input type="radio" id="radio05_02" name="radio05"><label for="radio05_02">ans 02</label>
<input type="radio" id="radio05_03" name="radio05"><label for="radio05_03">ans 03</label>
<input type="radio" id="radio05_04" name="radio05"><label for="radio05_04">ans 04</label>

---

#### webgl quiz

what is this?

<input type="radio" id="radio06_01" name="radio06"><label for="radio06_01">ans 01</label>
<input type="radio" id="radio06_02" name="radio06"><label for="radio06_02">ans 02</label>
<input type="radio" id="radio06_03" name="radio06"><label for="radio06_03">ans 03</label>
<input type="radio" id="radio06_04" name="radio06"><label for="radio06_04">ans 04</label>

---

#### webgl quiz

what is this?

<input type="radio" id="radio07_01" name="radio07"><label for="radio07_01">ans 01</label>
<input type="radio" id="radio07_02" name="radio07"><label for="radio07_02">ans 02</label>
<input type="radio" id="radio07_03" name="radio07"><label for="radio07_03">ans 03</label>
<input type="radio" id="radio07_04" name="radio07"><label for="radio07_04">ans 04</label>

---

#### webgl quiz

what is this?

<input type="radio" id="radio08_01" name="radio08"><label for="radio08_01">ans 01</label>
<input type="radio" id="radio08_02" name="radio08"><label for="radio08_02">ans 02</label>
<input type="radio" id="radio08_03" name="radio08"><label for="radio08_03">ans 03</label>
<input type="radio" id="radio08_04" name="radio08"><label for="radio08_04">ans 04</label>

---

#### webgl quiz

what is this?

<input type="radio" id="radio09_01" name="radio09"><label for="radio09_01">ans 01</label>
<input type="radio" id="radio09_02" name="radio09"><label for="radio09_02">ans 02</label>
<input type="radio" id="radio09_03" name="radio09"><label for="radio09_03">ans 03</label>
<input type="radio" id="radio09_04" name="radio09"><label for="radio09_04">ans 04</label>

---

#### webgl quiz

what is this?

<input type="radio" id="radio10_01" name="radio10"><label for="radio10_01">ans 01</label>
<input type="radio" id="radio10_02" name="radio10"><label for="radio10_02">ans 02</label>
<input type="radio" id="radio10_03" name="radio10"><label for="radio10_03">ans 03</label>
<input type="radio" id="radio10_04" name="radio10"><label for="radio10_04">ans 04</label>

---

#### how did it go?

<div id="ansButton">答え合わせ</div>

---


