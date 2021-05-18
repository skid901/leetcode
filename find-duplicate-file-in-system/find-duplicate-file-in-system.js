/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const map = {};
    paths.forEach(path => {
        const [dir, ...files] = path.split(' ');
        files.forEach(file => {
            const [name, content] = file.split(/[()]/);
            if (!map[content]) map[content] = [];
            map[content].push(`${dir}/${name}`);
        });
    });
    return Object.values(map).filter(paths => paths.length > 1);
};
