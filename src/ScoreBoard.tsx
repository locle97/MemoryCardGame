export function ScoreBoard({ score, highestScore }: { score: number; highestScore: number; }) {
    return (
        <div className="flex justify-between px-4 py-2 bg-gray-300">
            <div className="text-gray-700">Score: {score}</div>
            <div className="text-gray-700">High Score: {highestScore}</div>
        </div>
    );
}

