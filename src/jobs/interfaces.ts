export interface IScheduleJob {
    name: string
    crontab: string
    ttlInSeconds: number
    task: () => Promise<void>
}
