import DashboardView from "../DashboardView/DashboardView";
import BasicTable from 'components/molecules/BasicTable/BasicTable';
import ReservationControls from "components/molecules/ReservationControls/ReservationControls";

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  ];

const ReservationsView = () => {
    return <DashboardView>
    <div>
      <ReservationControls className='py-4' />
      <BasicTable data={people}/>
    </div>
  </DashboardView>;
};

export default ReservationsView;
