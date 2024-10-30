document.getElementById('speedUp').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: speedUpVideo
  });
});

function speedUpVideo() {
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    videoPlayer.playbackRate += 0.25;
  }
}

document.getElementById('speedDown').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: speedDownVideo
  });
});

function speedDownVideo() {
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    videoPlayer.playbackRate -= 0.25;
  }
}

document.getElementById('speedNormal').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: resetSpeed
  });
});

function resetSpeed() {
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    videoPlayer.playbackRate = 1;
  }
}

document.getElementById('speed2').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: speed2
  });
});

function speed2() {
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    videoPlayer.playbackRate = 2;
  }
}

document.getElementById('speed25').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: speed25
  });
});

function speed25() {
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    videoPlayer.playbackRate = 2.5;
  }
}

document.getElementById('speed3').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: speed3
  });
});

function speed3() {
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    videoPlayer.playbackRate = 3;
  }
}

document.getElementById('speed10').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: speed10
  });
});

function speed10() {
  const videoPlayer = document.querySelector('video');
  if (videoPlayer) {
    videoPlayer.playbackRate = 10;
  }
}