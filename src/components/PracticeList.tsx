import { Link } from 'react-router-dom';

type Link = {
  to: string;
  label: string;
};

// 링크배열로 목록 관리
function PracticeList() {
  const links: Link[] = [
    { to: 'list', label: 'SaveImage' },
    { to: 'search', label: 'SearchText' },
    { to: 'draw', label: '직업가챠' },
    { to: 'operationtf', label: '텐서플로우 사칙연산' },
    { to: 'filter', label: '배열 필터링' },
    { to: 'jcommunication', label: '자바와 대화하기' },
  ];
  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={`/contents/${link.to}`}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeList;
