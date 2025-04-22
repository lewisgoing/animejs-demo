'use client';

interface VisualizerParametersProps {
  params: { barWidth: number; barColor: string };
  setParams: React.Dispatch<React.SetStateAction<{ barWidth: number; barColor: string }>>;
}

const VisualizerParameters: React.FC<VisualizerParametersProps> = ({ params, setParams }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Visualizer Settings</h3>
      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-300">Bar Width</label>
        <input
          type="range"
          min="2"
          max="10"
          value={params.barWidth}
          onChange={(e) => setParams({ ...params, barWidth: parseInt(e.target.value) })}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-300">Bar Color</label>
        <input
          type="color"
          value={params.barColor}
          onChange={(e) => setParams({ ...params, barColor: e.target.value })}
          className="w-full h-8"
        />
      </div>
    </div>
  );
};

export default VisualizerParameters;