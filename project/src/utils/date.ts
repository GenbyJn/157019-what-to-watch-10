import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const ONE_HOUR = 360;

const COMMENT_DATE_FORMAT = 'MMMM DD, YYYY';

enum DurationTemplate {
  MinutesSeconds = 'm[:] s',
  HoursMinutesSeconds = 'H[:] m[:] s',
  HoursMinutes = 'H[h] m[m]'
}

enum TimeMetric {
  Second = 'seconds',
  Minute = 'minutes',
}

export const formattingCommentDate = (date: string): string =>
  dayjs(date).format(COMMENT_DATE_FORMAT);

export const formattingDuration = (runtime: number): string => {
  const timeDuration = dayjs.duration(runtime, TimeMetric.Minute);
  return timeDuration.format(DurationTemplate.HoursMinutes);
};

export const formattingLastTime = (runtime: number): string => {
  const timeDuration = dayjs.duration(runtime, TimeMetric.Second);

  if ((runtime / ONE_HOUR) < 1) {
    return timeDuration.format(DurationTemplate.MinutesSeconds);
  }

  return timeDuration.format(DurationTemplate.HoursMinutesSeconds);
};
