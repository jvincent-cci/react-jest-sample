import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0250 } from './Component0250';
    import { helper058 } from '../../helpers/helper058';

    describe('Component0250', () => {
      it('applies helper058 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0250 label="Generated 0250" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0250' }));

        expect(onApply).toHaveBeenCalledWith(helper058('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0250 label="Generated 0250" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0250' })).toBeDisabled();
      });
    });
