import TherapistsView from 'components/dashboard/therapist/TherapistsView'

const Dashboard = ({ therapists }) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">

          <TherapistsView therapists={therapists} />

        </div>
      </div>
    </div>
  )  
}

export default Dashboard
