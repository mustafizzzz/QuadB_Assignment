import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Table = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // Fetch cryptocurrency data from your Node.js backend
    axios.get('/api/v1/data/crypto-data')
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cryptocurrency data:', error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h1 className='text-center text-white fw-light mb-3 mt-1 text-light'>
        Cryptocurrency Information
      </h1>

      <table className="table table-dark table-striped"
        style={{ fontSize: '20px' }}>
        <thead>
          <tr>
            <th className='text-muted'>#</th>
            <th className='text-muted'>Name</th>
            <th className='text-muted'>Last Price</th>
            <th className='text-muted'>Buy Price</th>
            <th className='text-muted'>Sell Price</th>
            <th className='text-muted'>Volume</th>
            <th className='text-muted'>Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td >{index + 1}</td>
              <td>{crypto.name}</td>
              <td>{crypto.last}</td>
              <td>{crypto.buy}</td>
              <td>{crypto.sell}</td>
              <td>{crypto.volume}</td>
              <td>{crypto.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div >

  )
}

export default Table