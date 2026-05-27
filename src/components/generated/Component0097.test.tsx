import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0097 } from './Component0097';
    import { helper098 } from '../../helpers/helper098';

    describe('Component0097', () => {
      it('applies helper098 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0097 label="Generated 0097" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0097' }));

        expect(onApply).toHaveBeenCalledWith(helper098('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0097 label="Generated 0097" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0097' })).toBeDisabled();
      });
    });
