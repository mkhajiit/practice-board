import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardLayout from '../components/BoardLayout.tsx';
import SearchItem from '../components/contents/SearchItem.tsx';
import SaveImageContent from '../components/contents/SaveImage/SaveImageContent.tsx';
import ContentsList from '../components/contents/SaveImage/ContentsList.tsx';
import SaveImage from '../components/contents/SaveImage/SaveImage.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BoardLayout />}>
          <Route path='contents/:item' element={<SearchItem />} />
          <Route path='contents/register' element={<SaveImage />} />
          <Route path='contents' element={<ContentsList />} />
          <Route path='contents/saved-content/:item' element={<SaveImageContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
