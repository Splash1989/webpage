<template>
<div>
    <div class="modalframe">
              <div class="positions">
                  <div class="innermodal">
                      <p>Hello and welcome, person from the middle ages</p>
                      <p>That what you are calling a browser is not welcome here</p>
                      <p>Please learn to use well-oiled technology and come back again</p>
                      <p>Here you can download good stuff</p>
                      <div>
                          <a href="https://www.google.com/intl/de/chrome/"><img src="https://img.icons8.com/nolan/64/000000/chrome.png"></a>
                          <a href="https://www.mozilla.org/de/firefox/new/"><img src="https://img.icons8.com/nolan/64/000000/firefox.png"></a>
                          <a href="https://www.opera.com/de/download"><img src="https://img.icons8.com/nolan/64/000000/opera.png"></a>
                      </div>
                      <div id="regDiv">
                        <p>best regards</p>
                        <p>your internet :)</p>
                      </div>
                  </div>
              </div>
          </div>
</div>
</template>

<style>
.modalframe {
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin-bottom: 0%;
      overflow: auto;
      background-color: black;
      opacity: 1;
  }
  .positions {
      position: relative;
      width: 100%;
      height: 100%;
  }
  .positions > div {
      background-color: silver;
      position: absolute;
      bottom: 5%;
      margin-left: 5%;
      margin-right: 5%;
      border-radius: 20px;
      line-height: 2em;
      text-align: center;
      opacity: 0.5;
  }
  .innermodal {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
  }
  .innermodal p {
      margin-bottom: 6px;
      line-height: 1em;
  }
  .positions > img {
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0.3;
  }
  .modalframe p {
      font-family: "Berlin Sans FB";
  }
  #regDiv {
      text-align: left;
      margin-top: 10px;
  }
</style>