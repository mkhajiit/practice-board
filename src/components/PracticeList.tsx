import { Link } from 'react-router-dom';

type Link = {
  to: string;
  label: string;
};

// 링크배열로 목록 관리
function PracticeList() {
  const links: Link[] = [
    { to: '/contents/list', label: 'SaveImage' },
    { to: '/contents/search', label: 'SearchText' },
    { to: '/contents/draw', label: '직업가챠' },
    { to: '/contents/operationtf', label: '텐서플로우 사칙연산' },
    { to: '/contents/filter', label: '배열 필터링' },
  ];
  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeList;
