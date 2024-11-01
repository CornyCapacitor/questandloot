import { Progress } from '../ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export const ExperienceBar = ({ experience, level }: { experience: number, level: number }) => {
  const experienceRequired = 100 + 100 * level * ((level - 1) * 0.12)
  const experiencePercentage = (experience / experienceRequired) * 100

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="w-full">
          <div className="relative w-full h-8 flex items-center">
            <Progress
              value={experiencePercentage}
              indicatorColor="bg-green-600"
              className="rounded-none h-full bg-slate-900"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
              Level {level}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <span>Experience: {`${experience ?? 0} / ${experienceRequired.toFixed(0)}`}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}