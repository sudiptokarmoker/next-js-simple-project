import headerStyles from '../styles/Header.module.css';
export default function Header() {
    const x = 2;
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News
        </h1>
        <p className={headerStyles.description}>keep up to date with latest web dev news</p>
        {/* <style jsx>
            {
                `
                    .title {
                        color: ${x > 3 ?'red' : 'blue'}
                    }
                `
            }
        </style> */}
    </div>
  )
}
