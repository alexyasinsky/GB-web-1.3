export let getData = url => fetch(url).then(data => data.json());
