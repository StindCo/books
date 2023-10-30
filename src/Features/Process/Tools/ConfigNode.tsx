import ArpmNodeConfiguration from "./ConfigurationTools/ArpmNodeConfiguration";
import ArpuNodeConfiguration from "./ConfigurationTools/ArpuNodeConfiguration";
import LocalMultiRunnerNodeConfiguration from "./ConfigurationTools/LocalMultiRunnerNodeConfiguration";
import LocalRunnerNodeConfiguration from "./ConfigurationTools/LocalRunnerNodeConfiguration";
import MbouNodeConfiguration from "./ConfigurationTools/MbouNodeConfiguration";
import ModelNodeConfiguration from "./ConfigurationTools/ModelNodeConfiguration";
import MouNodeConfiguration from "./ConfigurationTools/MouNodeConfiguration";
import OutputNodeConfiguration from "./ConfigurationTools/OutputNodeConfiguration";
import PivotNodeConfiguration from "./ConfigurationTools/PivotNodeConfiguration";
import TranspositionNodeConfiguration from "./ConfigurationTools/TranspositionNodeConfiguration";

export default function ConfigNode({ details }: any) {
  return (
    <div>
      <div className="modal modal-open">
        <div className="modal-box w-11/12 p-0 max-w-7xl no-scrollBar">
          {details?.type == "model" && (
            <ModelNodeConfiguration details={details} />
          )}
          {details?.type == "pivot" && (
            <PivotNodeConfiguration details={details} />
          )}
          {details?.type == "arpu" && (
            <ArpuNodeConfiguration details={details} />
          )}
          {details?.type == "local_runner" && (
            <LocalRunnerNodeConfiguration details={details} />
          )}

          {details?.type == "local_multi_runner" && (
            <LocalMultiRunnerNodeConfiguration details={details} />
          )}

          {details?.type == "transposition" && (
            <TranspositionNodeConfiguration details={details} />
          )}

          {details?.type == "output_node" && (
            <OutputNodeConfiguration details={details} />
          )}

          {details?.type == "mou" && <MouNodeConfiguration details={details} />}
          {details?.type == "mbou" && <MbouNodeConfiguration details={details} />}
          {details?.type == "arpm" && <ArpmNodeConfiguration details={details} />}
        </div>
      </div>
    </div>
  );
}
