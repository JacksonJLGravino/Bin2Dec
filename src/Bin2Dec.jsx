import { useState } from 'react'
import './Bin2Dec.css'

export default function Bin2Dec() {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState(null);
    const [error, setError] = useState("")

    const handleConvert = () => {
        if (!/^[01]{1,8}$/.test(binary)) {
            setError("Digite um número binário válido (até 8 dígitos).")
            setDecimal(null)
            return
        }
        setError('')
        setDecimal(binary.split('').reduce((acc, digit, index) => acc + digit * Math.pow(2, binary.length - index - 1), 0))
    }

    return (
        <div className='background'>
            <div className='container'>
                <h1 className='header'>Bin2Dec Converter</h1>
                <input type="text"
                    placeholder='Digite um número binário'
                    value={binary}
                    onChange={(e) => setBinary(e.target.value)}
                    className='input'
                />
                <button onClick={handleConvert} className='button'>Converter</button>
                {error && <p className='error'>{error}</p>}
                {decimal !== null && <p className='decimal'>{decimal}</p>}
            </div>
        </div>
    )
}