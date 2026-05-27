import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0584 } from './Component0584';
    import { helper017 } from '../../helpers/helper017';

    describe('Component0584', () => {
      it('applies helper017 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0584 label="Generated 0584" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0584' }));

        expect(onApply).toHaveBeenCalledWith(helper017('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0584 label="Generated 0584" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0584' })).toBeDisabled();
      });
    });
