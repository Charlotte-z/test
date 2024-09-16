self.onmessage = function (event) {
  const { action, payload } = event.data;

  if (action === 'sendRequest') {
    const { url, token } = payload;

    const sseUrl = `${url}?token=${encodeURIComponent(token)}`;

    const eventSource = new EventSource(sseUrl);

    eventSource.onmessage = function (e) {
      self.postMessage({ success: true, data: e.data });
    };

    eventSource.onerror = function (e) {
      self.postMessage({ success: false, error: 'Connection error' });
      eventSource.close();
      console.error('EventSource error, connection closed.');
    };

    self.eventSource = eventSource;
  } else if (action === 'closeConnection') {
    if (self.eventSource) {
      self.eventSource.close();
      console.log('EventSource connection manually closed.');
    }
  }
};

console.log('This message is from web worker...');
