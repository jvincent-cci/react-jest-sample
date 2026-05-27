import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0917 } from './Component0917';
    import { helper017 } from '../../helpers/helper017';

    describe('Component0917', () => {
      it('applies helper017 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0917 label="Generated 0917" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0917' }));

        expect(onApply).toHaveBeenCalledWith(helper017('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0917 label="Generated 0917" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0917' })).toBeDisabled();
      });
    });
