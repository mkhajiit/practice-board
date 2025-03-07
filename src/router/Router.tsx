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
import PracticePage from '../pages/PracticePage.tsx';
import HomePage from '../pages/HomePage.tsx';
import IntroducePage from '../pages/IntroducePage.tsx';
import NotFound from '../pages/NotFound.tsx';

type RouterProps = {
  toggleTheme: () => void; // toggleTheme prop 타입 추가
};

// prop을 전달받기 위해서 theme을 설정
// index 속성이 있는 Route는 현재 라우트의 기본 경로(즉, /)에서만 렌더링됨
function Router({ toggleTheme }: RouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        {/* BoardLayout에 prop을 전달받기 위해 여기에 설정해야함 */}
        <Route path='/' element={<BoardLayout toggleTheme={toggleTheme} />}>
          <Route index element={<HomePage />} />
          <Route path='contents' element={<PracticePage />}>
            <Route path='search' element={<Search />} />
            <Route path='search/:item' element={<SearchItem />} />
            <Route path='register' element={<SaveImage />} />
            <Route path='list' element={<ContentsList />} />
            <Route path='saved-content/:item' element={<SaveImageContent />} />
            <Route path='draw' element={<DrawLots />} />
            <Route path='operationtf' element={<OperationTf />} />
            <Route path='filter' element={<Filter />} />
          </Route>
          <Route path='/introduce-myself' element={<IntroducePage />} />
        </Route>
        {/* path="*"는 모든 경로에 해당하지 않는 URL을 처리하는 역할을 함*/}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
