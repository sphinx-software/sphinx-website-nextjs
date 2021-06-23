import styles from "../styles/Home.module.css";
import Image from 'next/image'
import React from "react";

export default function WorkingProcess() : JSX.Element {
    return (
        <div className={styles.workingMain}>
            <div className={styles.workingIntroduction}>
                <text className={styles.workingTitle}>Working process</text>
                <br/>
                <text className={styles.workingDescription}>Sphinx workflow based on agile scrum methodology has agility
                    and adaptability, creativity and innovation with lower costs, quality improvement, and maximization
                    of company synergy.
                </text>
            </div>
            <div className={styles.workingContent}>
                <div>
                    <p className={styles.workingContentTitle}>Requirement&apos;s analysis</p>
                    <div className="flex w-full h-auto pb-250">
                        <div className={styles.workingContentLine}/>
                        <div className={styles.workingContentImageContainer}>
                            <div>
                                <Image src="/analysis.svg" width={424} height={424}/>
                            </div>
                            <p className={styles.workingContentImageDescription}>
                                After receiving inquiries from customer, the Sphinx team will indicate the project scope
                                and
                                create a plan to gain engagement with customers by using tools
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.workingContentTitle}>Design</p>
                    <div className="flex w-full h-auto pb-250">
                        <div className={styles.workingContentLine}/>
                        <div className={styles.workingContentImageContainer}>
                            <div>
                                <Image src="/design.svg" width={424} height={424}/>
                            </div>
                            <p className={styles.workingContentImageDescription}>
                                The process divides into two-stage: Internal Design and External Design. These stages
                                help
                                determine that the software meets thespecifications&apos; goals and improves the product
                                in
                                the future.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.workingContentTitle}>Development</p>
                    <div className="flex w-full h-auto pb-250">
                        <div className={styles.workingContentLine}/>
                        <div className={styles.workingContentImageContainer}>
                            <div>
                                <Image src="/development.svg" width={424} height={424}/>
                            </div>
                            <p className={styles.workingContentImageDescription}>
                                Sphinx engineer team write code and convert the design documentation into the existing
                                software within the software development process.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.workingContentTitle}>Deployment</p>
                    <div className="flex w-full h-auto pb-250">
                        <div className={styles.workingContentLine}/>
                        <div className={styles.workingContentImageContainer}>
                            <div>
                                <Image src="/deployment.svg" width={424} height={424}/>
                            </div>
                            <p className={styles.workingContentImageDescription}>
                                The final stage to making sure all code is merged in one place and continuously ready to
                                be shipped. Seamlessly taking the product from continuous delivery and deploying to
                                servers through.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
