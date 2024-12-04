import Header from '../../components/Header';
import InlineMenu from '../../components/InlineMenu';
import Sidebar from '../../components/Sidebar';
import Jumbotron from './components/Jumbotron';
import StatementList from './components/StatementList';
import NewTransaction from './components/NewTransaction';

const Dashboard = ():JSX.Element => (
  <div>
    <Header />

    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1300px] flex flex-col gap-6 p-6 lg:flex-row">
        <Sidebar />
        <InlineMenu />

        <div className="flex-1">
          <Jumbotron />
          <NewTransaction />
        </div>

        <StatementList />
      </div>
    </div>
  </div>
);

export default Dashboard;
