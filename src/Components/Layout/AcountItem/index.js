import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './Acount.module.scss'

const cx = classNames.bind(styles)

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://icdn.dantri.com.vn/thumb_w/640/2021/03/14/hot-girl-9-x-dep-goi-camdocx-1615737535134.jpeg"
                alt="Hoaaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Đào Thị Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>daothihoaa</span>
            </div>
        </div>
    )
}

export default AcountItem
