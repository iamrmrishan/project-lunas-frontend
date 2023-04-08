import TimeAgo from 'react-timeago';
type Props = {
  date: string;
};

export function Time({ date }: Props) {
  return <TimeAgo date={date} />;
}
