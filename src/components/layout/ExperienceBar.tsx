import { useSocket } from '@/app/middleware/SocketContext'
import { playerAtom } from '@/app/state/atoms'
import { Player } from '@/app/types'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { Progress } from '../ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export const ExperienceBar = () => {
  const [player] = useAtom<Player | null>(playerAtom)
  const { updatePlayer } = useSocket()
  const [experienceRequired, setExperienceRequired] = useState(0)
  const [experiencePercentage, setExperiencePercentage] = useState(0)

  const calculateLevelAndExperience = (experience: number, currentLevel: number) => {
    let level = currentLevel;
    let experienceRequired = Math.floor(100 + 100 * level * ((level - 1) * 0.12));

    while (experience >= experienceRequired) {
      experience -= experienceRequired;
      level += 1;
      experienceRequired = Math.floor(100 + 100 * level * ((level - 1) * 0.12));
      alert(`Congratulations! You've earned new level: ${level}`)
    }

    return { level, remainingExperience: experience };
  };

  const handleLevelUp = () => {
    if (!player) return

    const { level, remainingExperience } = calculateLevelAndExperience(player.experience, player.level)

    updatePlayer({
      ...player,
      level,
      experience: remainingExperience
    })
  };

  useEffect(() => {
    if (!player) return;

    const newExperienceRequired = Math.floor(100 + 100 * player.level * ((player.level - 1) * 0.12));
    const newExperiencePercentage = (player.experience / newExperienceRequired) * 100;

    setExperienceRequired(newExperienceRequired);
    setExperiencePercentage(newExperiencePercentage);

    if (player.experience >= newExperienceRequired) {
      handleLevelUp();
    }
  }, [player]);

  if (!player) return (
    <div>Experience bar</div>
  )

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
              Level {player.level}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <span>Experience: {`${player.experience ?? 0} / ${experienceRequired.toFixed(0)}`}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}