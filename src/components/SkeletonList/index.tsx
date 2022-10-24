import Skeleton from '@mui/material/Skeleton';

import styles from './SkeletonList.module.scss';

export function SkeletonList() {
  return (
    <>
      {Array(1)
        .fill(0)
        .map((_, index) => (
          <div className={styles.containerList}>
            <Skeleton
              key={index}
              variant="rounded"
              width="17.625rem"
              height="30rem"
              animation="pulse"
            />
          </div>
        ))}
    </>
  );
}
