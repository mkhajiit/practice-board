import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardLayout from '../components/BoardLayout.tsx';
import SearchItem from '../components/contents/SearchItem.tsx';
import SaveImageContent from '../components/contents/SaveImage/SaveImageContent.tsx';
import ContentsList from '../components/contents/SaveImage/ContentsList.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BoardLayout />} />
        <Route path='/contents/:item' element={<SearchItem />} />
        <Route path='/contents/save-item-list' element={<ContentsList />} />
        <Route path='/contents/save-content/:item' element={<SaveImageContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
