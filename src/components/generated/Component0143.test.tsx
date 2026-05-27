import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0143 } from './Component0143';
    import { helper098 } from '../../helpers/helper098';

    describe('Component0143', () => {
      it('applies helper098 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0143 label="Generated 0143" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0143' }));

        expect(onApply).toHaveBeenCalledWith(helper098('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0143 label="Generated 0143" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0143' })).toBeDisabled();
      });
    });
