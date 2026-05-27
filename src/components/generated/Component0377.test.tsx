import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0377 } from './Component0377';
    import { helper055 } from '../../helpers/helper055';

    describe('Component0377', () => {
      it('applies helper055 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0377 label="Generated 0377" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0377' }));

        expect(onApply).toHaveBeenCalledWith(helper055('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0377 label="Generated 0377" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0377' })).toBeDisabled();
      });
    });
