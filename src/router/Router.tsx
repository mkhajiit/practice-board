import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardLayout from '../components/BoardLayout.tsx';
import SearchItem from '../components/contents/SearchItem.tsx';
import SaveImageContent from '../components/contents/SaveImage/SaveImageContent.tsx';
import ContentsList from '../components/contents/SaveImage/ContentsList.tsx';
import SaveImage from '../components/contents/SaveImage/SaveImage.tsx';
import DrawLots from '../components/contents/DrawLots/DrawLots.tsx';
import Search from '../components/contents/Search.tsx';
import OperationTf from '../components/contents/OperationTf.tsx';
import Filter from '../components/contents/Filter.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BoardLayout />}>
          <Route path='contents/search' element={<Search />} />
          <Route path='contents/search/:item' element={<SearchItem />} />
          <Route path='contents/register' element={<SaveImage />} />
          <Route path='contents/list' element={<ContentsList />} />
          <Route path='contents/saved-content/:item' element={<SaveImageContent />} />
          <Route path='contents/draw' element={<DrawLots />} />
          <Route path='contents/operationtf' element={<OperationTf />} />
          <Route path='contents/filter' element={<Filter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
