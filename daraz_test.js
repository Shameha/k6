import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 10, 
  duration: '10s',
};

export default function () {
  let res = http.get('https://www.daraz.com.bd/#?');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1); 
  }

  export function handleSummary(data) {
  return {
    'C:/k6/summary.json': JSON.stringify(data), // Save the summary data as a JSON file
  };
}