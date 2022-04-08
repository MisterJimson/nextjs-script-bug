export default function Test2({content}:any) {
  return (<>
    <h1>Test 2 - Button</h1>
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