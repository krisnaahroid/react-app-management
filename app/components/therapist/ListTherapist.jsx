import React from 'react'
import { Table } from 'components/strap'

const ListTherapist = () => (
  <div className="p-a-lg">
    <Table className="kokoro-table">
      <thead>
        <tr>
          <th />
          <th>Order</th>
          <th>Income</th>
          <th>Duration</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="therapist">Swangga Hadi</td>
          <td>15</td>
          <td>140.000</td>
          <td>15 Minutes</td>
          <td>Male</td>
        </tr>
        <tr>
          <td className="therapist">Rohit Sharma</td>
          <td>12</td>
          <td>90.000</td>
          <td>12 Minutes</td>
          <td>Male</td>
        </tr>
        <tr>
          <td className="therapist">Debora</td>
          <td>73</td>
          <td>6.000.000</td>
          <td>73 Minutes</td>
          <td>Female</td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default ListTherapist
