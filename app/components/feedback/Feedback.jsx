import { Table } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component'

const Feedback = () => (
  <div className="kokoro-blue-table">
    <div className="heading-text">
      <h4>CUSTOMER FEEDBACK
        <span>Customer Feedback</span>
      </h4>
    </div>
    <div className="table-responsive">
      <Table>
        <thead>
          <tr>
            <th width="17.5%">Name</th>
            <th width="17.5%">Order Number</th>
            <th width="17.5%">Therapist Name</th>
            <th width="17.5%">Date & Time</th>
            <th width="30%">Customer Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bonnar Tambunan</td>
            <td>+6287712332133</td>
            <td>Dinnar Tambunan</td>
            <td>08.45 PM, <br />Saturday 17 June 2017. </td>
            <td>
              <div className="ratting-star">
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  starCount={5}
                  value={4.5}
                  renderStarIcon={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" id="star-icon" x="0px" y="0px" width="16" height="16" viewBox="0 0 475.075 475.075">
                      <path d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704   c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706   l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136   c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386   c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136   c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z" />
                    </svg>)}
                  renderStarIconHalf={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" id="star-icon" x="0px" y="0px" width="16" height="16" viewBox="0 0 475.075 475.075">
                      <path d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704   c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706   l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136   c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386   c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136   c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z" />
                    </svg>)}
                />
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </td>
          </tr>
          {/* {
            feedback.map((item, i) => (
              <tr key={i}>
                <td>{item.attributes.name}</td>
                <td>{item.attributes.phone}</td>
                <td>{item.attributes.therapist}</td>
                <td>{item.attributes.order}</td>
                <td>
                  <StarRatingComponent name="rate2" editing={false} starCount={5} value={item.attributes.rating} />
                </td>
              </tr>
            ))
          } */}
        </tbody>
      </Table>
    </div>
  </div>
)

export default Feedback
