import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0455 } from './Component0455';
    import { helper017 } from '../../helpers/helper017';

    describe('Component0455', () => {
      it('applies helper017 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0455 label="Generated 0455" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0455' }));

        expect(onApply).toHaveBeenCalledWith(helper017('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0455 label="Generated 0455" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0455' })).toBeDisabled();
      });
    });
