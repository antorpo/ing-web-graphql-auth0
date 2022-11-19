import MainNavbar from 'components/molecules/MainNavbar/MainNavbar';
import PanelControls from 'components/molecules/PanelControls/PanelControls';

const DashboardView = ({ children }) => {
  return (
    <div>
      <MainNavbar />
      <div className="flex">
        <PanelControls />
      </div>
      <div className='container mx-auto'>{children}</div>
    </div>
  );
};

export default DashboardView;
