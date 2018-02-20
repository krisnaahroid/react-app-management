import PropTypes from 'prop-types'
import { Table, Avatar, Button } from 'components/strap'
import StarRatingComponent from 'react-star-rating-component'

const EditButton = () => (
  <Button color="secondary">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 45 38">
      <g fill="none">
        <path fill="#FFF" d="M33.532 12.785l-1.697 1.638-3.656-3.528 1.699-1.638a.757.757 0 0 1 1.044 0l2.61 2.52c.29.279.29.73 0 1.008zm-4.895 2.71l1.044-1.008 1.044 1.008-7.31 7.056-7.313 7.057-4.852 1.156 1.198-4.684 7.31-7.056 7.313-7.057 1.044 1.008-1.044 1.008-2.089 2.015-4.18 4.033-7.064 6.819 1.568 1.511 7.064-6.818 4.178-4.033 2.089-2.016z" />
      </g>
    </svg>
  </Button>
)

const DeleteButton = () => (
  <Button color="secondary">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 45 38">
      <g fill="none">
        <path fill="#FFF" d="M28.469 13.668H16.035v13.999c0 1.288.928 2.333 2.073 2.333h8.288c1.146 0 2.073-1.045 2.073-2.333v-14M24.842 9h-5.18l-1.036 1.168h-2.59c-.572 0-1.036.522-1.036 1.165v1.168h14.506v-1.168c0-.643-.464-1.165-1.037-1.165h-2.59L24.842 9" />
      </g>
    </svg>
  </Button>
)

const DataTherapist = ({ therapists }) => (
  <div className="kokoro-blue-table">
    <div className="heading-text">
      <h4>DATA THERAPIST
        <span>Data Therapist</span>
      </h4>
    </div>
    <div className="table-responsive">
      <Table>
        <thead>
          <tr id="therapist-data">
            <th width="300px">Name</th>
            <th width="300px">Phone</th>
            <th width="300px">Gender</th>
            <th width="300px">Based</th>
            <th width="300px">Ratting</th>
            <th width="300px" />
          </tr>
        </thead>
        <tbody>
          {
          therapists.map((item, i) => (
            <tr key={i}>
              <td>
                <Avatar image={item.attributes.avatar} /><br />
                {item.attributes.name}
              </td>
              <td>{item.attributes.phone_number}</td>
              <td>{item.attributes.gender}</td>
              <td>{item.attributes.outlets}</td>
              <td>
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  starCount={5}
                  value={item.attributes.rating}
                  renderStarIcon={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" id="star-icon" x="0px" y="0px" width="16" height="16" viewBox="0 0 475.075 475.075">
                      <path d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704   c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706   l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136   c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386   c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136   c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z" />
                    </svg>)}
                  renderStarIconHalf={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" id="star-icon" x="0px" y="0px" width="16" height="16" viewBox="0 0 475.075 475.075">
                      <path d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704   c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706   l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136   c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386   c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136   c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z" />
                    </svg>)}
                />
              </td>
              <td className="action-button">
                {EditButton()}
                {DeleteButton()}
              </td>
            </tr>
          ))
          }
        </tbody>
      </Table>
    </div>
  </div>
)
DataTherapist.propTypes = {
  therapists: PropTypes.array.isRequired,
}
export default DataTherapist
