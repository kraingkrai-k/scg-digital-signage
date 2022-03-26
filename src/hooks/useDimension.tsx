interface IDimension {
    aspect: number
    adjustedHeight: number
    width: number
    height: number
}

const useDimension = (): IDimension => {
    // const [state, setState] = useState<IDimension>({} as IDimension)

    // useEffect(() => {
    //     const width = window.screen.width
    //     const height = window.screen.height

    //     const aspect = width / height;
    //     const adjustedHeight = Math.ceil(width / aspect);
    // }, [])

    const width = window.screen.width
    const height = window.screen.height

    const aspect = width / height;
    const adjustedHeight = Math.ceil(width / aspect);

    return {
        width,
        height,
        aspect,
        adjustedHeight
    }
};

export default useDimension;
