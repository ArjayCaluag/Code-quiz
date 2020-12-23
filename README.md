# **Code Quiz**
For this assignment, we are to build a code quiz website from scratch, showcasing our knowledge with the use of Web APIs and local storage. The game consists of questions with one correct answer per question. Each incorrect answer reduces your time you have to complete the quiz by 10 seconds. The game is ended once allt he questions have been completed or when the user runs out of time.

<br><br>

![image](https://user-images.githubusercontent.com/52800632/102970285-17d79480-44ac-11eb-806e-90e283960d40.png)

# **Installation**


Link javascript to html file
```html
<script src="script.js"></script>
```

Clone repository from github, track changes and push onto your own Github Repository.

```bash
git clone [sshkeyurl]
```

```bash
git add .
```
```bash
git commit -m "message"
```
```bash
git push origin main
```

# **Built With**

<ul>
    <li> Javascript - scripting language that allows implementation of complex web features
    <li> HTML - The standard markup language for web pages </li>
    <li> CSS - used to describe the presentation of markup langauges such as HTML </li>
</ul>

# **Code Snippet**

```js
// Checks to see if userChoice is not equivalent to the value of correctAnswer. When an incorrect answer is chosen, 10 seconds is removed from timer and generates next question
function validateAnswer(){
    let userChoice = this.value
    let correctAnswer = questions[questionIndex].answer
    if (userChoice !== correctAnswer){
        timeRemaining -=10
    }
    questionIndex++
    generateQuestion();
}
```
```js
//Hide start zone and display question zone on click
// Interval countdown clock is set onclick
function startQuiz() {
    startScreenEl.style.display = 'none';
    questionZoneEl.style.display = 'block';
    timerId = setInterval(clockTick, 1000)
    generateQuestion()
 
```
# **Deployed Link**

https://arjaycaluag.github.io/Code-quiz/

# **Author**

Ron-Arjay Caluag

[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
<br>
[Github](https://github.com/ArjayCaluag)

# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
