import styles from './styles.module.css'  
import Link from 'next/link'

export default function ApprovalScheme() {
    return (
        <div className={styles["my-container"]}>
            <h1 className={styles["header-1"]} >Approval Scheme</h1>

            <div className={styles.wrapper}>
                <p className={styles.paragraph}>
                    As all members of the GRIN community council all have owner roles on this repository, the following rules for approvals of pull-requests(PR) are suggested:
                </p>

                <table className={`${styles.table} ${styles["border-green-200"]} ${styles["mt-8"]} ${styles["mx-auto"]} ${styles.dark} ${styles["bg-black"]} ${styles["border-frame"]}`}>
                    <thead>
                        <tr>
                            <th>Repository</th>
                            <th>Required members of CC for PR****</th>
                            <th>notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Link href="https://github.com/grincc/agenda"><a>agenda</a></Link></td>
                            <td className={styles["text-center"]}>1</td>
                            <td>CC meeting notes, etc</td>
                        </tr>
                        <tr>
                            <td><Link href="https://github.com/grincc/hub"><a>hub</a></Link></td>
                            <td className={styles["text-center"]}>1</td>
                            <td>code, tools, sites, memes, marketing, art</td>
                        </tr>
                        <tr>
                            <td><Link href="https://github.com/grincc/security"><a>security</a></Link></td>
                            <td className={styles["text-center"]}>4</td>
                            <td>signing, verifying</td>
                        </tr>
                        <tr>
                            <td><Link href="https://github.com/grincc/finance"><a>finance</a></Link></td>
                            <td className={styles["text-center"]}>4</td>
                            <td>public CC fund documentation</td>
                        </tr>
                        <tr>
                            <td><Link href="https://github.com/grincc/docs"><a>docs</a></Link></td>
                            <td className={styles["text-center"]}>2</td>
                            <td>CC related documents</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
