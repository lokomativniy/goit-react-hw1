import Profile from './components/Profile/Profile';
import user from './user.json';
import statistics from './statistics.json';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './components/Ttansactions/Transactions';
import FriendList from './components/FriendList/FriendList';
import Section from './components/Section/Section';
import Container from './components/Container/Container';

export default function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Section title="Upload stats" stats={statistics} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}