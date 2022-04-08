import { useEffect } from "react";

export default function Test1({content}:any) {
  useEffect(() => {
    window.gtag('event', 'set', {
        event_category: 'event_category',
        event_label: 'event_label',
        value: 'value',
      })
  });

  return (<>
    <h1>Test 1 - Immediate useEffect</h1>
    <p>{content}</p>
    <button onClick={()=>{
        console.log('clicked')
          window.gtag('event', 'set', {
            event_category: 'event_category',
            event_label: 'event_label',
            value: 'value',
          })
    }}>Click me</button>
  </>);
}