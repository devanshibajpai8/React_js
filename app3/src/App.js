import { useState } from 'react'
import QRCode from 'qrcode';

function App() {
  const[url,setUrl]=useState('');
  const[qrcode,setQrcode]=useState('');
  const GenerateQRCode=()=>{
    QRCode.toDataURL(url,{
      width:800,
      margin:4,
      color:{
        dark:'#335383ff',
        light:'#ffffffff'
      }

    },(err,url)=>{
      if(err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }
  return (
    <div className="App">
      <h1><u>QR GENERATOR APP</u></h1>
      <input type="text" placeholder="e.g. https://google.com"
      value={url}
      onChange={(evt)=>setUrl(evt.target.value)} />
    &nbsp;
    &nbsp;
    <button onClick={GenerateQRCode}>Generate QR</button>
    {qrcode && <>
    <img src={qrcode} alt="Cant generate QR" />
    <a href={qrcode} download="qrcode.png">Download QR</a>
    </>}
    </div>
  );
}

export default App;