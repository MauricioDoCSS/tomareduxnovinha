import { useMediaQuery } from 'react-responsive';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickOutside } from '../../hooks/useClickOutside';
import { TitleDialog } from './TitleDialog';
import { MdClose } from 'react-icons/md';
import { Button } from '../Button';

type Props = {
  visible: boolean;
  onHide: () => void;
  label: string;
  description: string;
  acceptLabel?: string;
  rejectLabel?: string;
  accept?: () => void;
};

// Animations
const mobileVariants = {
  hidden: { y: '100%' },
  visible: { y: 0 },
  exit: { y: '100%' },
};

const desktopVariants = {
  hidden: { scale: 0.5 },
  visible: { scale: 1 },
  exit: { scale: 0.5 },
};

const transition = {
  type: 'spring',
  stiffness: 450,
  damping: 40,
  duration: 0.5,
};

export const Dialog = ({
  visible,
  onHide,
  label,
  acceptLabel = 'Sim',
  rejectLabel = 'Não',
  description,
  accept,
}: Props) => {
  const ref = useClickOutside<HTMLDivElement>(() => onHide());
  const isMobile = useMediaQuery({ maxWidth: 568 });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="full-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            ref={ref}
            className="dialog"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={isMobile ? mobileVariants : desktopVariants}
            transition={transition}
          >
            <div className="top-content-dialog">
              <TitleDialog label={label} />
              <button className="btn-close" onClick={onHide}>
                <MdClose />
              </button>
            </div>

            <div className="middle-content-dialog">
              <p>{description}</p>
            </div>

            <div className="bottom-content-dialog">
              <Button label={rejectLabel} styleType="outline" onClick={onHide} />
              <Button label={acceptLabel} onClick={accept} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
