import Form from "./_components/Form";

const Dialog = ({ onClose, onTypeChoose }) => (
  <div className="fixed inset-0 bg-black/20 flex items-center justify-center">
    <div role="dialog" className="bg-white px-4 py-8 rounded-lg">
      <Form onSubmit={() => onClose()} />
    </div>
  </div>
);

export default Dialog;
