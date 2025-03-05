import { Outlet } from 'react-router-dom';
import PracticeList from '../components/PracticeList';

function PracticePage() {
  return (
    <div>
      <h1>연습한 과제들</h1>
      <PracticeList />
      <Outlet />
    </div>
  );
}

export default PracticePage;
