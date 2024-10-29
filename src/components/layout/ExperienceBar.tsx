import { Progress } from '../ui/progress'

export const ExperienceBar = ({ experience, level }: { experience: number, level: number }) => {
  const experienceRequired = 100 + 100 * level * ((level - 1) * 0.12)
  const experiencePercentage = (experience / experienceRequired) * 100

  return (
    <div className="relative w-full h-8 flex items-center">
      <Progress
        value={experiencePercentage}
        indicatorColor="bg-green-600"
        className="rounded-none h-full"
      />
      <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
        Exp: {`${experience} / ${experienceRequired.toFixed(0)}`}
      </span>
    </div>
  )
}