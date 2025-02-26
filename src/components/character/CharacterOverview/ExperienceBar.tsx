import { config } from '@/app/config'
import { useSocket } from '@/app/middleware/SocketContext'
import { playerAtom } from '@/app/state/atoms'
import { Attributes, Player, Profession } from '@/app/types'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

export const ExperienceBar = ({ className }: { className?: string }) => {
  const [player] = useAtom<Player | null>(playerAtom)
  const { updatePlayer } = useSocket()
  const [experienceRequired, setExperienceRequired] = useState(0)
  const [experiencePercentage, setExperiencePercentage] = useState(0)

  const calculateCharacter = (experience: number, level: number, attributes: Attributes, profession: Profession): { level: number, experience: number, attributes: Attributes } => {
    const experienceRequired = Math.floor(100 + 100 * level * ((level - 1) * 0.12));

    if (experience >= experienceRequired) {
      return {
        level: level + 1,
        experience: experience - experienceRequired,
        attributes: {
          strength: attributes.strength + config.professionMultipliers.levelUp[profession].strength,
          agility: attributes.agility + config.professionMultipliers.levelUp[profession].agility,
          intellect: attributes.intellect + config.professionMultipliers.levelUp[profession].intellect,
          stamina: attributes.stamina + config.professionMultipliers.levelUp[profession].stamina,
          luck: attributes.luck + config.professionMultipliers.levelUp[profession].luck
        }
      }
    }

    return { level, experience, attributes };
  };

  const handleLevelUp = () => {
    if (!player) return

    const { level, experience, attributes } = calculateCharacter(player.experience, player.level, player.attributes, player.profession)

    updatePlayer({
      ...player,
      level,
      experience,
      attributes
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player]);

  if (!player) return (
    <div>Experience bar</div>
  )

  return (
    <div className={`${className}`}>
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
    </div>
  )
}